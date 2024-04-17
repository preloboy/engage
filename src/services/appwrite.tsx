import { Account, Client } from "appwrite";

const client = new Client;

client
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('6610d8d2d96e9e156c49')

export const account = new Account(client)