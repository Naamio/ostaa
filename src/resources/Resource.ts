import log from "tipu";

import Client from "../Client";

/** 
 * Base Resource object for querying and persisting data.
 */
class Resource {

    /**
     * Client to use when querying or persisting resources.
     */
    protected client: Client;

    /**
     * Instantiates a new Resource object for querying and persisting
     * data.
     * 
     * @param client Service client for instantiating resource.
     */
    constructor(client: Client) {
        this.client = client;
    }
}

export default Resource;