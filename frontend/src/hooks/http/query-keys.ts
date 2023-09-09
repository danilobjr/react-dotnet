const SECURITY_UPDATES = 'SECURITY_UPDATES' as const

const GET_ALL = 'GET_ALL' as const

export const queryKeys = {
  securityUpdates: {
    getAll: () => [SECURITY_UPDATES, GET_ALL],
  },
} as const
