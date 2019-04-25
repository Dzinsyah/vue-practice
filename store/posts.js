export const state = () => ({
    all:    [
        {
            id: 'what',
            title: 'GADA',
            content:'platform jual beli untuk barang grosir pemain besar di seluruh Indonesia. Saat ini, GADA telah beroperasi dan menghasilkan omset pendapatan +- 1 milyar per hari. Nah untuk menjembatani transaksi jual beli ini, GADA memiliki platform yang saat ini kita kerjakan (gudangada.com).',
            images: '="../assets/images/logoGADA.png"'
          },
          {
            id: 'how',
            title: 'Bagaimana GADA terbentuk?',
            content: 'BE (Backend) developer, bertugas untuk menyajikan, mengolah, dan memproses data pada platform gudangada.com, FE (Frontend) developer bertugas untuk melakukan consume data & menyajikan data yang diperoleh dari Backend ke dalam visual UI yang notabene berhubungan langsung dengan user di depan.'
          },
          {
            id: 'frontend',
            title: 'tugas frontend',
            content: 'Frontend, terbagi menjadi 2 apps berbeda, yakni apps buyer, dan apps seller. Dimana konsepnya mirip seperti marketplace kebanyakan. Apps buyer ditujukan untuk melakukan transaksi pembelian barang, sedangkan apps seller ditujukan untuk manajemen data bagi seller. Admin/Ops GADA, memiliki hak akses yang berbeda dalam urusan manajemen data, dan tidak melalui aplikasi yang disediakan oleh Frontend.'
          },
          {
            id: 'backend',
            title: 'Tugas backend',
            content: 'Backend, saat ini menggunakan Drupal 8 sebagai core utama nya, dan menggunakan JSONAPI serta GraphQL sebagai web service-nya. Baca juga: JSONApi Swagger GADA, GraphQL'
          }
    ]
})