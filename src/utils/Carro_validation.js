const create = {
    modelo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const update = {
    modelo: {
        presence: {
            allowEmpty: true,
        },
        type: 'string',
    },
    ano: {
        presence: {
            allowEmpty: true,
        },
        type: 'string',
    },
    marca: {
        presence: {
            allowEmpty: true,
        },
        type: 'string',
    }
};

const get = {
    modelo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    modelo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};