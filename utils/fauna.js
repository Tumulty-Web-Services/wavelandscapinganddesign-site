const faunadb = require('faunadb');

const faunaClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });
const q = faunadb.query;

const getGalleryPhotos = async () => {
  const { data } = await faunaClient.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('gallery'))),
      q.Lambda('ref', q.Get(q.Var('ref'))),
    ),
  );
  const gallery = data.map((photo) => photo);

  return gallery;
};

const getLandScapeDesignPhotos = async () => {
  const { data } = await faunaClient.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('landscape-designs'))),
      q.Lambda('ref', q.Get(q.Var('ref'))),
    ),
  );
  const gallery = data.map((photo) => photo);

  return gallery;
};

export {
  getGalleryPhotos,
  getLandScapeDesignPhotos,
};
