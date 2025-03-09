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
- [Bootstrap](https://getbootstrap.com/)


<!-- USAGE EXAMPLES -->

## Kullanımı

Projeyi <b>npm install</b>  komutunu çalıştırdıktan sonra ng serve komutu ile başlatabilir veya [Demo](https://campaigns-case.netlify.app/) sayfasından inceleyebilirsiniz.

Login ekranında <b>username</b> ve <b>password</b>  olmak üzere iki giriş alanı bulunmaktadır. Giriş bilgileri şu şekildedir:

- Username: admin
- Password: 123456

Yanlış kullanıcı adı veya şifre girildiğinde, toast ile uyarı mesajı görüntülenmektedir.


Giriş yaptıktan sonra, kampanyaların listelendiği <b>/campaigns</b> sayfasına yönlendirileceksiniz. Sidebar üzerinden veya Yeni Kampanya butonuna tıklayarak yeni kampanya ekleme sayfasına geçebilirsiniz. Kampanya başarıyla eklendiğinde, bir toaster mesajı görüntülenir ve otomatik olarak <b>/campaigns</b> sayfasına yönlendirilirsiniz.

Kampanyalar, her biri bir <b>card</b> şeklinde listelenmektedir. Kartların üzerindeki üç noktaya tıklayarak <b>Düzenle veya Silme</b>  seçeneklerini kullanabilirsiniz.
