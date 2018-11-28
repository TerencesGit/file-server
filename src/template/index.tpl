<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>{{title}}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        a {
            font-size: 20px;
        }
    </style>
</head>
<body>
    {{#each files}}
        <div>
            <a href="{{../dir}}/{{this}}">{{this}}</a>
        </div>
    {{/each}}
</body>
</html>