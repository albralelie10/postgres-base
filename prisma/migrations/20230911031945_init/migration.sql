-- CreateTable
CREATE TABLE "Sample" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Sample_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sample_id_key" ON "Sample"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Sample_email_key" ON "Sample"("email");
