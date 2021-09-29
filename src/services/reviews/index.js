import express from 'express';
import db from '../../db/models/index.js';
const router = express.Router();
const { Review, Product } = db;
router
	.route('/')
	.get(async (req, res, next) => {
		try {
			const data = await Review.findAll({
				include: Product,
			});
			res.send(data);
		} catch (error) {
			console.log(error);
			next(error);
		}
	})
	.post(async (req, res, next) => {
		try {
			const data = await Review.create(req.body);
			res.send(data);
		} catch (error) {
			console.log(error);
			next(error);
		}
	});

router
	.route('/:id')
	.get(async (req, res, next) => {
		try {
		} catch (error) {
			console.log(error);
			next(error);
		}
	})
	.put(async (req, res, next) => {
		try {
		} catch (error) {
			console.log(error);
			next(error);
		}
	})
	.delete(async (req, res, next) => {
		try {
		} catch (error) {
			console.log(error);
			next(error);
		}
	});

export default router;
