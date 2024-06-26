# Movie Application

## Project Description [Demo](https://sam21sop.github.io/movie-application-MERN)
The Movie Watchlist application is a web-based tool that allows users to manage a list of movies they want to watch. Users can add, edit, and delete movies from their watchlist, mark movies as watched or unwatched, and rate and review movies. State management will be handled using Redux to ensure efficient and predictable state updates.


## Features
1. Add movie watchlist
2. Edit/Update movie
3. Remove from watchlist
4. Mark movie isWatched?
5. Rate and Review Movies

## Functional Requirement
1. Moview Management
    - Add movie (Form fields: Title (required), Description, Release Year, Genre.)
    - edit movie (Form fields pre-filled with existing movie details.)
    - delete movie (delete a movie based on Id)
2. Rating and Review Management
    - Rating a movie (Star rating component allowing users to rate a movie from 1 to 5 stars.)
    - Add review (Textarea input for users to write a review.)
3. Watch status Management
    - Mark as watched/unwatched

## Technical Specification
1. Frontend
    - ReactJs (Building User interface)
    - Redux-Toolkit (State management)
    - Tailwind CSS (Utility classes for fast development)
2. Backend
    - Mock API using JSON server
    - NodeJs/ExpressJs (optinally)
3. Database
    - MongoDB (Persistent storage.)
    - localstorage

## User Interface Design 
1. Home Page
    - Display a list of movies in the watchlist.
    - Buttons/links to add a new movie, edit or delete existing movies, and mark movies as watched/unwatched.
2. Add/Edit Movie Page
    - Form for adding or editing movie details.
    - Fields: Title, Description, Release Year, Genre.
    - Save and Cancel buttons.
3. Movie Details Page
    - Display movie details including title, description, release year, genre, watch status, rating, and reviews.
    - Options to edit or delete the movie, mark it as watched/unwatched, and add/edit a rating and review.

### Common Component
1. Header: Component for the application header/navigation bar.
2. Footer: Component for the application footer.
3. Button: Reusable button component.
4. Modal: Reusable modal component for confirmations and forms.
5. Rating: Component for displaying and selecting star ratings.

### Movie Managment Component
1. MovieList: Component to display a list of movies.
2. MovieCard: Component to display a single movie's details in a list.
3. MovieForm: Component for the form used to add or edit a movie.
4. MovieDetails: Component to display detailed information about a single movie.
5. ReviewForm: Component for adding/editing a movie review.
6. Review: Component to display a single review.


## Folder Structure
```
src/
    |
    ├── components/
    │       ├── layout_components/
    │       │       ├── Container.jsx
    │       │       ├── Grid.jsx
    │       ├── movie_components/
    │       │       ├── MovieCard.jsx
    │       │       ├── MovieDetails.jsx
    │       │       ├── MovieForm.jsx
    │       │       ├── MovieList.jsx
    │       │       ├── ReviewForm.jsx
    │       │       ├── Review.jsx
    │       │       ├── WatchedToggle.jsx
    │       ├── shared_components/
    │       │       ├── Button.jsx
    │       │       ├── EditIcon.jsx
    │       │       ├── DeleteIcon.jsx
    │       │       ├── Footer.jsx
    │       │       ├── Header.jsx
    │       │       ├── Modal.jsx
    │       │       ├── Rating.jsx
    |
    ├── redux/
    │       ├── moviesSlice/
    │       │       ├── movieSlice.js
    │       ├── ratingsSlice/
    │       │       ├── ratingSlice.js
    │       ├── store.js
    |
    ├── App.jsx
    ├── main.jsx
    ├── index.html

```

## Installation
1. Clone the repository: `git clone https://github.com/Sam21sop/movie-application-MERN.git`
2. Navigate to the project directory: `cd movie-application-MERN`
3. Install dependencies: `npm install`
4. Run the Application `npm run dev`
