/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
export class SingletonStorage {
    private static instance: SingletonStorage;

    selectedTweets: Set<number>;
    selectedNews: string;
    twitterUserName: string;

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() { 
        this.selectedTweets = new Set();
        this.selectedNews = "";
        this.twitterUserName = "";

        console.log("Storage lebt hier")
    }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): SingletonStorage {
        if (!SingletonStorage.instance) {
            SingletonStorage.instance = new SingletonStorage();
        }

        return SingletonStorage.instance;
    }

    

    /**
     * Finally, any singleton should define some business logic, which can be
     * executed on its instance.
     */
    public someBusinessLogic() {
        // ...
    }
}