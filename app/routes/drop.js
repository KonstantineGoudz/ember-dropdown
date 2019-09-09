import Route from '@ember/routing/route';

export default Route.extend({
    controllerName: 'dropController',
    model() {
        return {

            options: [
                "test",
                "cool",
                "ffart"
            ]
        }
    }
});
