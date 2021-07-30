// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json(
    {
      datampl: [
        { nama: 'Karachi Parfum Mist',harga: '200000' }, 
        { nama: 'Parfum Pria Adidas',harga: '250000' }, 
        { nama: 'Aigner Black' ,harga: '70000'}
      ]
    }
  );
}
