Hippo Icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> Others are taken from Material-UI

# Project Info

Project uses apollo client for react, typescript, material-ui and Hasura GraphQL engine(via json2graphql) and is running on heroku.
I fully admit that without using typescript, it would take half of the time.
Other half would be spared with custom made components - like with styled components.

Very problematic part for this project was usage of previous API provider, json-graphql-server package. This proved to
bring numerous problems and bugs. So I spent quite a lot of time with fixing of this state, because I wanted to try some
mocked API for graphql. THIS SHIT IS HARD TO FIND ......

Hasura GraphQL engine together with json2graphql and heroku proved to be solid implementation API provider based on JSON format.
After that, there is possibility of relation adjustments.

## What is Good

Students can be not only added but deleted too, same applies for Subjects.
I implemented provisional multi-language switch. Multiple error handlers are present (Alert, ErrorBoundary).
I used Material-UI and Typescript finally (for me it is good :D)
State in app is persisted, real requests to servers are made.
I used https://rollbar.com/ for error/incident tracking

## What is Wrong

I did not finish the project with full requirements due to lack of time and ton lot of new things I wanted to try.
Meaning that specifically student book does not provide score adjustment.
Layout and component visual/semantical hierarchy could be done better.

## What was intended

Storybook with one example, Testing (cypress and snapshot test example). Full responsivity was intended. This is just partially done.
Possible BE impl similar as in my other repo (https://github.com/DarkEye123/zonky-funky-rating)

### Used Materials

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Thank you for your time :)
