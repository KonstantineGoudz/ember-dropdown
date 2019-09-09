# lister

This is an example of how to setup a dropdown selection in ember

## Prerequisites

You will need to assign a controller for your route for this to work properly

# quick example

-
    create a route
    ```bash
    ember generate route drop
    ```
-
    create a contoller 
    ```bash
    ember generate controller drop-controller
    ```
- 
    associate the controller with the route in *`app/routes/drop.js`*
    ```javascript
    import Route from '@ember/routing/route';

    export default Route.extend({
        controllerName: 'dropController', // the generated controller
        model() { // the model for the  route which will be passed to the conroller
            return {
                options: [
                    "test",
                    "cool",
                    "ffart"
                ]
            }
        }
    });

    ```

-
    Implement the action in the controller *`app\controllers\drop-controller.js`*
    ```javascript
    import Controller from '@ember/controller';

    export default Controller.extend({
        actions:{
            sel(val){
                alert(val)
            }
        }
    });
    ```
- Finally in the *`app\templates\drop.hbs`*
    ```handlebars
    <select onchange={{action "sel" value="target.value"}} >
        {{#each model.options as |opt|}}
            <option value={{opt}}>{{opt}}</option>
        {{/each}}
    </select>
    {{outlet}}
    ```