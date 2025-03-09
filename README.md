<!-- TABLE OF CONTENTS -->

## İçerik
- [Demo Sayfası](#demo-sayfası)
- [Kurulum](#kurulum)
- [Kullanılan Paketler](#kullanılan-paketler)
- [Kullanımı](#kullanımı)

## Demo Sayfası
- [Demo](https://campaigns-case.netlify.app/)
## Kurulum

1. Github reposunu klonlayın

```sh
git clone https://github.com/GizemCoban/campaigns-case.git
```

2. master branchine geçin

```sh
git checkout master
```

3. NPM paketlerini kurun

```sh
npm install
```

5. Projeyi (Angular) çalıştırma

```sh
ng serve
```

## Kullanılan Paketler

Uygulama geliştirme sırasında aşağıdaki paketlerden yararlanılmıştır.

- [Angular](https://angular.io/)
- [Rx.js](https://rxjs.dev/)
- [Bootsrapt](https://getbootstrap.com/)


<!-- USAGE EXAMPLES -->

## Kullanımı

Projeyi <b>npm install</b> komutunu çalıştırdıktan sonra <b>ng serve</b> komutu ile ayağa kaldırabilir veya [Demo](https://campaigns-case.netlify.app/) sayfasından devam edebilirsiniz.


Login ekranında username ve password olarak iki tane alan bulunmaktadır. Username <b>admin</b> ve password <b>123456</b> olarak ayarlanmıştır. Yanlış kullanıcı adı veya şifre girildiğin de toast ile uyarı mesajı görüntülenmektedir. <br/> <br/>

Login olduktan sonra kampanyaların listelendiği /campaigns sayfasına yönlendirileceksiniz. Sidebar'dan ya da 
<b>Yeni Kampanya </b> butonuna tıklayarak yeni kampanya ekleyebileceğiniz sayfaya yönleneceksiniz. Kampanya eklemi başarı ise toaster mesajı gösterilmekte ve  /campaigns sayfasına yönlenmektedir.

Kampanyaların her biri bir card olarak gösterilmekte ve 3 noktaya tıklayarak <b>Düzenle veya Silme</b> seçeneklerini seçebilirsiniz.
