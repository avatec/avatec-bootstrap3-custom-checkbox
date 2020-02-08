# Custom Checkbox/Radio styling
Vanilla JS Custom Checkbox. Example usage bellow.
Package uses font-awesome 4.7.x.

# Feautures
* Includes SCSS for customize checkbox
* Working with Bootstrap 3.x, 4.x
* Require Font Awesome 4.7.x to work (could also be used by any other icon pack after changes in scss file)



~~~~<!DOCTYPE html>
    <html lang="en" dir="ltr">
        <head>
            <meta charset="utf-8">
            <title>Avatec Bootstrap3 Custom Radio/Checkbox</title>
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
            <link rel="stylesheet" type="text/css" href="src/checkbox.css" />
        </head>
        <body>
            <h1>This is example checkbox</h1>

            <div class="checkbox">
                <label for="example_checkbox">
                    <input type="checkbox" id="example_checkbox" name="example_checkbox" value="true">
                    First unchecked example checkbox
                </label>
            </div>

            <div class="checkbox checkbox-checked">
                <label for="example_checkbox2">
                    <input type="checkbox" id="example_checkbox2" name="example_checkbox" value="true" checked>
                    Second checked example checkbox
                </label>
            </div>

            <h1>This is example radio</h1>

            <div class="radio">
                <label for="example_radio_1">
                    <input type="radio" id="example_radio_1" name="example_radio_1" value="true">
                    First unchecked example radio
                </label>
            </div>

            <div class="radio radio-checked">
                <label for="example_radio_2">
                    <input type="radio" id="example_radio_2" name="example_radio_1" value="true" checked>
                    Second checked example radio
                </label>
            </div>

            <script src="src/checkbox.js" type="text/javascript"></script>
        </body>
    </html>
~~~~

[If You like this project - please donate using PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=RN84ZCNKWJNLG&item_name=Donate&currency_code=USD&source=url")
