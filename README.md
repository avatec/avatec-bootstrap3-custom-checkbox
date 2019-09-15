# Custom Checkbox for Bootstrap 3.x
PureJS Custom Checkbox that not require jQuery to work. Example usage bellow. 
Package uses font-awesome 4.7.x, and default bootstrap3 checkbox implementation.

# Feautures
* Includes SCSS for customize checkbox
* Working with Bootstrap 3.x
* Could work without jquery
* Require Font Awesome 4.7.x to work (could also be used by any other icon pack after changes in scss file)



    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="uf8-8">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
            <link rel="stylesheet" href="dist/checkbox.min.css" type="text/css"></link>
        </head>
        <body>
            <h1>This is example usage with bootstrap 3.x</h1>
        
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
        
            <script src="https://code.jquery.com/jquery-3.4.1.min.js" type="text/javascript"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
            <script src="src/checkbox.js" type="text/javascript"></script>
        </body>
    </html>
    
If You like this project - please donate me:
https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=RN84ZCNKWJNLG&item_name=Donate&currency_code=USD&source=url

