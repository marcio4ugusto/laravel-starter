## Laravel starter

A based [Laravel](https://laravel.com/) template turbocharged by the stack:

-   [Inertia Js](https://inertiajs.com/) with [react](https://react.dev/)
-   [Tailwindcss](https://tailwindcss.com/) with [Shadcn UI](https://ui.shadcn.com/) components

### How to start

Clone this repository, enter into cloned folder and install dependencies:

```shell
    git clone git@github.com:marcio4ugusto/laravel-starter.git <FOLDER NAME>
    cd <FOLDER NAME>
    composer install
    npm install
```

> Change <FOLDER NAME> to your folder destination name

### What you'll find

In the `resources/js` folder you will find a react SPA application provided by InertiaJS.

There are two routes in `routes/web.php`. One for the home page - `Welcome.tsx` - and one for the control panel - `ControlPanel.tsx`.

The `app/Http/Middleware/HandleInertiaRequests` middleware returns the authenticated user's information to the `ControlPanel` view.

### Things to do

-   [ ] Authentication process
-   [ ] Contribution guide

### License

Just like each component in the stack, this repo is open-sourced and licensed under the [MIT license](https://opensource.org/license/mit/).
