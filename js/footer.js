const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">men</li>
                <li><a href="" class="footer-link">t-shirts</a></li>
                <li><a href="" class="footer-link">sweatshirts</a></li>
                <li><a href="" class="footer-link">shirts</a></li>
                <li><a href="" class="footer-link">jeans</a></li>
                <li><a href="" class="footer-link">trousers</a></li>
                <li><a href="" class="footer-link">shoes</a></li>
                <li><a href="" class="footer-link">casuals</a></li>
                <li><a href="" class="footer-link">formals</a></li>
                <li><a href="" class="footer-link">sports</a></li>
                <li><a href="" class="footer-link">watch</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">women</li>
                <li><a href="" class="footer-link">t-shirts</a></li>
                <li><a href="" class="footer-link">sweatshirts</a></li>
                <li><a href="" class="footer-link">shirts</a></li>
                <li><a href="" class="footer-link">jeans</a></li>
                <li><a href="" class="footer-link">trousers</a></li>
                <li><a href="" class="footer-link">shoes</a></li>
                <li><a href="" class="footer-link">casuals</a></li>
                <li><a href="" class="footer-link">formals</a></li>
                <li><a href="" class="footer-link">sports</a></li>
                <li><a href="" class="footer-link">watch</a></li>
            </ul>
        </div>

    </div>
    <p class="footer-title"> about company</p>
    <p class="info"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit delectus temporibus ea dolorum reiciendis nulla rem saepe? Dolor iusto ipsam ducimus suscipit deserunt soluta temporibus doloremque ipsa commodi voluptas magnam amet repellat, sit nihil explicabo expedita possimus exercitationem ipsum ad natus nulla accusantium saepe. Unde voluptatibus, aut ratione, praesentium sint illo aliquid molestiae quos voluptate debitis a dolores alias. Alias, non. Assumenda, labore iure exercitationem temporibus nemo dignissimos corporis possimus illo illum eligendi consectetur mollitia, asperiores quos hic libero cupiditate adipisci eaque blanditiis ab quas maxime! Sit neque cum excepturi placeat vero et harum molestiae, cupiditate rerum illum temporibus deleniti.</p>
    <p class="info"> support emails - help@clothing.com,
        customersupport@clothing.com </p>
        <p class="info"> telephone - 9324526689 , 022 2545 6589</p>
        <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & conditions</a>
            <a href="#" class="social-link">privacy page</a>
            </div>
         <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
         </div>
        </div>
        <p class="footer-credit"> Clothing, Best apparels online Store</p>
    `;
}

createFooter();