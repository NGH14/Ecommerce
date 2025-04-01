const bcrypt = require("bcrypt")
const crypto = require("crypto")

const shopModel = require('../models/shop.models');

const Role = {
	SHOP: "0001",
	WRITER: "008",
	EDITOR: "007",
	ADMIN: "000"
}


class AccessService {
	static signUp = async ({ name, email, password }) => {
		try {
			const isCreated = await shopModel.exists({ email });
			if (isCreated)
				return {
					code: 'yyyy',
					message: 'Shop already registered ',
				};
        const passwordHash = await bcrypt.hash(password, 10);

				const newShop = await shopModel.create({
					name, password: passwordHash, roles: [Role.SHOP]
				})

				if (newShop) {
					const { publicKey, privateKey } = crypto.generateKeyPair('rsa', {modulusLength: 4096})
					console.log({ publicKey, privateKey })
				}


		} catch (error) {
			return {
				code: 'xxxx',
				message: error.message,
				status: 'error',
			};
		}
	};
}
