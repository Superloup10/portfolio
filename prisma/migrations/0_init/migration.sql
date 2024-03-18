-- CreateTable
CREATE TABLE "formation" (
    "id" SMALLSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "begin_date" DATE NOT NULL,
    "end_date" DATE NOT NULL,

    CONSTRAINT "pk_formation_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project" (
    "id" SMALLSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "github_url" VARCHAR(255) NOT NULL,
    "web_url" VARCHAR(255),

    CONSTRAINT "pk_project_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projectskill" (
    "project_id" SMALLINT NOT NULL,
    "skill_id" SMALLINT NOT NULL,
    "formation_id" SMALLINT,

    CONSTRAINT "pk_projectskill_id" PRIMARY KEY ("project_id","skill_id")
);

-- CreateTable
CREATE TABLE "skill" (
    "id" SMALLSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "url" VARCHAR NOT NULL,
    "image_url" VARCHAR NOT NULL DEFAULT 'EMPTY',

    CONSTRAINT "pk_skill_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "social" (
    "id" SMALLSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "url" VARCHAR(255) NOT NULL,

    CONSTRAINT "pk_social_id" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "formation_name_key" ON "formation"("name");

-- CreateIndex
CREATE UNIQUE INDEX "project_name_key" ON "project"("name");

-- CreateIndex
CREATE UNIQUE INDEX "skill_name_key" ON "skill"("name");

-- CreateIndex
CREATE UNIQUE INDEX "social_name_key" ON "social"("name");

-- AddForeignKey
ALTER TABLE "projectskill" ADD CONSTRAINT "fk_projectskill_formation_id" FOREIGN KEY ("formation_id") REFERENCES "formation"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projectskill" ADD CONSTRAINT "fk_projectskill_project_id" FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projectskill" ADD CONSTRAINT "fk_projectskill_skill_id" FOREIGN KEY ("skill_id") REFERENCES "skill"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

