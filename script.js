<script>
const items = document.querySelectorAll(".menu-item");

items.forEach(item => {
    item.addEventListener("click", function () {

        const submenu = this.nextElementSibling;

        if (!submenu || !submenu.classList.contains("submenu")) return;

        document.querySelectorAll(".submenu").forEach(el => {
            if (el !== submenu) {
                el.classList.remove("active");
                el.previousElementSibling.classList.remove("active");
            }
        });

        submenu.classList.toggle("active");
        this.classList.toggle("active");
    });
});
</script>