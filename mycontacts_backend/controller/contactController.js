// @desc Get all contacts
// @route GET /api/contacts
// @access Public

const getContacts = (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
}

// @desc Create New contact
// @route POST /api/contacts
// @access Public

const postContact = (req, res) => {
    console.log('The request body is :', req.body)
    const { name, phone, email } = req.body
    if (!name || !phone || !email) {
        res.status(400);
        throw new Error("Please enter all fields!");
    }
    res.status(201).json({ message: "Create contact" });
}

// @desc Get contact
// @route GET /api/contacts/:id
// @access Public

const getContact = (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` });
}

// @desc Update contact
// @route PUT /api/contacts/:id
// @access Public
const updateContact = (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
}

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access Public

const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}` });
}


module.exports = { getContacts, postContact, getContact, deleteContact, updateContact }