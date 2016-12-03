export const FETCH_QUEUE = 'FETCH_QUEUE'
export const FETCH_QUEUE_DONE = 'FETCH_QUEUE_DONE'
export const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS'
export const FETCH_TAGS = 'FETCH_TAGS'
export const ADD_TAG = 'ADD_TAG'
export const REMOVE_TAG = 'REMOVE_TAG'
export const SET_ACTIVE_DONATION = 'SET_ACTIVE_DONATION'
export const FETCH_TOTAL_AMOUNT = 'FETCH_TOTAL_AMOUNT'
export const FETCH_TOTAL_AMOUNT_DONE = 'FETCH_TOTAL_AMOUNT_DONE'

export function fetchQueue() {
  return {
    type: FETCH_QUEUE
  }
}

export function fetchQueueDone(queue) {
  return {
    type: FETCH_QUEUE_DONE,
    queue
  }
}

export function fetchAccounts() {
  return {
    type: FETCH_ACCOUNTS
  }
}

export function fetchTotalAmount() {
  return {
    type: FETCH_TOTAL_AMOUNT
  }
}

export function fetchTotalAmountDone(totalAmount) {
  return {
    type: FETCH_TOTAL_AMOUNT_DONE,
    totalAmount
  }
}

export function fetchTags() {
  return {
    type: FETCH_TAGS
  }
}

export function addTag(account, tag) {
  return {
    type: ADD_TAG,
    account: account,
    tag: tag
  }
}

export function removeTag(account, tag) {
  return {
    type: REMOVE_TAG,
    account: account,
    tag: tag
  }
}

export function setActiveDonation(id) {
  return {
    type: SET_ACTIVE_DONATION,
    id
  }
}