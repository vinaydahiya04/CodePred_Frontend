# CodePred
CodePred is a Codeforces problems recommendation engine that recommends you codeforces problems to solve considering your current rating and questions solved till date on Codeforces.
The site tries to suggests you the kind of problems which will be helpful in improving your Codeforces rating.

# Site Url
The website is hosted at https://code-pred.netlify.app/
You are required to signup using your email id and Codeforces handle to access the recommendation system.
Incase you are too lazy to make an account and just want to check out the features you can login using the following credentials:
Email: 
Password: 

# Backend Code
The backend code for CodePred is available at  https://github.com/vinaydahiya04/codepred-backend

# Aim/Inspiration
The idea behind this recommendation system was to save the enormous amounts of time coders spend on finding the right problems to solve on codeforces.

# Explaination
## Intuition
Coders have different likes/dislikes or strengths/weaknesses in competitive programming and we cant specify which topics/areas of competitve programming are necessary as well as sufficient to excel in this field.
## Theory
My idea was to find n similar coders all rated one level above the user in codeforces (for eg if the user is a specialist then i try to find n similar expert ranked coders) and find a similarity score using user - user collaborative filtering and then use this similarity score to calculate the ratings of problems of various categories that the user should solve.
Coders one level higher than the User were considered so that the User can improve while at the same time not find the questions suggested too difficult.

## Feature Vector
The feature vector was a 9*1 vector with the following Codeforces problem categories as features:
"dp", "binary search", "graphs", "greedy", "math", "trees", "strings", "brute force", "two pointers"
1. dp
2. binary search
3. graphs
4. greedy
5. math
6. trees
7. strings
8. brute force
9. two pointers

PS. I do plan to add more features later on
## Observation
A key observation to make over here is that normal user-user collaborative filtering using cosine similarity will give wrong results because the theta is not the accurate representation of similarity between two coders. The following examples explain the observation

## Workaround
....

## Suggesting Problems to the User
....

# Tech Stack
....

# Features and their implementation
.....

# Installation
......


# Future work

CodePred uses user-user collaborative filtering to compare


# Link to the Deployed Website:
https://code-pred.netlify.app/profile

# Backend Link:
"https://codepred.herokuapp.com/"

# To check all the recommended questions for each user:
"https://codepred.herokuapp.com/api/prediction/info?handle=" + {Your CodeForces Handle}