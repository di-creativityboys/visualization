import { env } from "~/env.mjs";





/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
export class SingletonServer {
    

    private static instance: SingletonServer;
    twitterUserName: string;

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() {
        this.twitterUserName = "";

        const isServer = typeof window === "undefined" ? true : false;

        if (isServer) {
            console.log("Storage executed on server, everything is fine.");
        } else {
            console.error("Executed on client!!!!!")
        }
    }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): SingletonServer {
        if (!SingletonServer.instance) {
            SingletonServer.instance = new SingletonServer();
        }

        return SingletonServer.instance;
    }

    /**
     * Finally, any singleton should define some business logic, which can be
     * executed on its instance.
     */
    public someBusinessLogic() {
        // ...
    }
}


const globalForSingletonServer = globalThis as unknown as {
    singletonServer: SingletonServer | undefined;
};

export const singletonServer =
    globalForSingletonServer.singletonServer ??
    SingletonServer.getInstance()

if (env.NODE_ENV !== "production") globalForSingletonServer.singletonServer = singletonServer;