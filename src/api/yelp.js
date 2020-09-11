import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer j_svKsIzyOM_7sx-ndPmSlgqE-5u60FWIDBthPgzMKtuzeWzreqOXRVgkusUYxCc2H25qTyCHZA3NJLe0ssysMEBJbg42_xQhmFkfBFNeahlsboc5GXx4_oDRKJaX3Yx',
  },
})
