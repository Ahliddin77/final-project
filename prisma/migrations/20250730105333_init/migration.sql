-- CreateTable
CREATE TABLE "public"."Hero" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Hero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Pricing" (
    "id" SERIAL NOT NULL,
    "planName" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "features" TEXT NOT NULL,

    CONSTRAINT "Pricing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."About" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "About_pkey" PRIMARY KEY ("id")
);
