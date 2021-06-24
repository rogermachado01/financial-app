
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Node {
    id: string;
}

export interface IQuery {
    me(): Account | Promise<Account>;
    account(id: string): Account | Promise<Account>;
}

export interface Account extends Node {
    id: string;
    username: string;
    email: string;
}

export type SearchResult = Account;
