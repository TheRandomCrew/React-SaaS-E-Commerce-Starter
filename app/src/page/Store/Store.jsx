import React from 'react'

const Store = () => (
    <div>
        <h1>Our Store:</h1>
        <div class="ec-cart-widget"></div>
            <div>
                <script data-cfasync="false" type="text/javascript"
                    src="https://app.ecwid.com/script.js?17089835&data_platform=code&data_date=2019-04-24"
                    charset="utf-8"></script>
                <script type="text/javascript">Ecwid.init();</script>
            </div>
            <div id="my-search-17089835"></div>
            <div>
                <script data-cfasync="false" type="text/javascript"
                    src="https://app.ecwid.com/script.js?17089835&data_platform=code&data_date=2019-04-24"
                    charset="utf-8"></script>
                <script type="text/javascript"> xSearch("id=my-search-17089835"); </script>
            </div>
            <div id="my-categories-17089835"></div>
            <div>
                <script data-cfasync="false" type="text/javascript"
                    src="https://app.ecwid.com/script.js?17089835&data_platform=code&data_date=2019-04-24"
                    charset="utf-8"></script>
                <script type="text/javascript"> xCategoriesV2("id=my-categories-17089835"); </script>
            </div>

            <div id="my-store-17089835"></div>
            <div>
                <script data-cfasync="false" type="text/javascript"
                    src="https://app.ecwid.com/script.js?17089835&data_platform=code&data_date=2019-04-24"
                    charset="utf-8"></script>
                <script
                    type="text/javascript"> xProductBrowser("categoriesPerRow=3", "views=grid(20,3) list(60) table(60)", "categoryView=grid", "searchView=list", "id=my-store-17089835");</script>
            </div>
    </div>
)

export default Store