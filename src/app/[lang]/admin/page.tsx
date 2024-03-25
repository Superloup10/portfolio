"use client"

import Home from "@/app/[lang]/page";
import {useAdmin} from "@/context/AdminContext";
import {useDictionary} from "@/context/DictionaryContext";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {Input} from "@/components/ui/input";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function Admin() {
    const {dictionary} = useDictionary();
    const {isAdmin, setAdmin} = useAdmin();
    const [password, setPassword] = useState("");
    const router = useRouter();

    const onDialogSubmit = async () => {
        const response = await fetch("/api/v1/admin", {
            method: "POST",
            cache: "force-cache",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(password)
        });
        if (response.ok) {
            const data = await response.json();
            if (data?.isValid) {
                setAdmin(true);
                router.push("/");
            } else {
                throw new Error("Invalid password");
            }
        }
    };
    return (
        <>
            <AlertDialog defaultOpen={!isAdmin}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{dictionary.admin.login.title}</AlertDialogTitle>
                    </AlertDialogHeader>
                    <Input type="password" value={password} placeholder="Password"
                           onChange={(e) => setPassword(e.target.value)}/>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={onDialogSubmit}>{dictionary.admin.login.action}</AlertDialogAction>
                        <AlertDialogCancel>{dictionary.admin.login.cancel}</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            <Home/>
        </>
    );
}
