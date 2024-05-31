const {
    findResep,
    findResepById,
    deleteResep
} = require('./resep.repository');

const getAllReseps = async () => {
    const reseps = await findResep();

    return reseps;
}

const getResepById = async (id) => {
    const reseps = await findResepById(id);

    if (!reseps) {
        throw new Error("Resep not found");
    }

    return reseps;
}

const deleteResepById = async (id) => {
    await getResepById(id);

    await deleteResep(id);
}

module.exports = {
    getAllReseps,
    getResepById,
    deleteResepById
};