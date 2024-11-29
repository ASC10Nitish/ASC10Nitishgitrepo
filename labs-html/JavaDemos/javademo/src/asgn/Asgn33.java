package asgn;

import java.util.Scanner;

// Movie is Asgn31
public class Asgn33 {
    private String movieName;
    private String producedBy;
    private String directedBy;
    private int duration;
    private int year;
    private String category;
    private static int moviesCount=-1;
    private String movieId;

    public Asgn33(String movieName, String producedBy) {
        if (movieName == null || producedBy == null) {
            throw new IllegalArgumentException("Movie name and produced by are mandatory fields.");
        }
        this.movieName = movieName;
        this.producedBy = producedBy;
        moviesCount++;
    }

    public Asgn33(String movieName, String producedBy, String directedBy, int duration, int year, String category) {
        this(movieName, producedBy);
        this.directedBy = directedBy;
        this.duration = duration;
        this.year = year;
        this.category = category;
        moviesCount++;
    }

    public void acceptDetails() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the movie name:");
        this.movieName = sc.nextLine();
        System.out.println("Enter the producer name:");
        this.producedBy = sc.nextLine();
        System.out.println("Enter the director name:");
        this.directedBy = sc.nextLine();
        System.out.println("Enter the duration of the movie (in minutes):");
        this.duration = sc.nextInt();
        System.out.println("Enter the year of release:");
        this.year = sc.nextInt();
        sc.nextLine();
        System.out.println("Enter the movie category (e.g., Comedy, Action):");
        this.category = sc.nextLine();
    }

    public void displayDetails() {
        System.out.println("Movie Details:");
        System.out.println("Movie Name: " + movieName);
        System.out.println("Produced By: " + producedBy);
        System.out.println("Directed By: " + (directedBy != null ? directedBy : "Not available"));
        System.out.println("Duration: " + duration + " minutes");
        System.out.println("Year: " + year);
        System.out.println("Category: " + (category != null ? category : "Not available"));
        System.out.println("Movies count is "+moviesCount);
        System.out.println("Movie id is "+getMovieId());

    }

    public String getMovieId()
    {
        return movieName+"_"+moviesCount;
    }
    public void display()
    {
        System.out.println(movieName+producedBy+directedBy+duration+year+category+moviesCount);
    }
    public String getMovieName() {
        return movieName;
    }

    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }

    public String getProducedBy() {
        return producedBy;
    }

    public void setProducedBy(String producedBy) {
        this.producedBy = producedBy;
    }

    public String getDirectedBy() {
        return directedBy;
    }

    public void setDirectedBy(String directedBy) {
        this.directedBy = directedBy;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public static void main(String[] args) {
        Asgn33 movie = new Asgn33("Inception", "Christopher Nolan");
        movie.displayDetails();

        Asgn33 anotherMovie = new Asgn33("The Dark Knight", "Warner Bros", "Christopher Nolan", 152, 2008, "Action");
        anotherMovie.displayDetails();

        movie.display();


    }




}

