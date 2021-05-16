export const CollectionForPreview = (collections) => {
	const collection = Object.keys(collections).map((key) => collections[key]);
	return collection;
};
