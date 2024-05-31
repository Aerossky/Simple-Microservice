const prisma = require('../db');

const findResep = async () => {
    const reseps = await prisma.resep.findMany();

    return reseps;
};

const findResepById = async (id) => {
    const resep = await prisma.resep.findUnique({
        where: {
            id: Number(id)
        }
    });

    return resep;
};

const deleteResep = async (id) => {
    await prisma.resep.delete({
        where: {
            id: Number(id)
        }
    });
}


module.exports = {
    findResep,
    findResepById,
    deleteResep
};