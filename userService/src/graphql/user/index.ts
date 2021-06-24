
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
}

export interface Node {
    id: string;
}

export abstract class IQuery {
    abstract me(): User | Promise<User>;

    abstract user(id: string): User | Promise<User>;
}

export class User implements Node {
    id: string;
    username: string;
    email: string;
    role: Role;
}

export type SearchResult = User;
