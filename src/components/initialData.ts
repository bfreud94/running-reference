import { Activity } from '../api/types'
import { HomeDataType, StateDataAndTotals } from './types'

export const numberToMonthMap = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
}

const initialCurrentData: HomeDataType = {
	2010: {
		activities: [],
		totals: {
			activities: 0,
			distance: 0
		}
	},
	2011: {
		activities: [],
		totals: {
			activities: 0,
			distance: 0
		}
	},
	2012: {
		activities: [],
		totals: {
			activities: 0,
			distance: 0
		}
	},
	2013: {
		activities: [],
		totals: {
			activities: 0,
			distance: 0
		}
	},
	2014: {
		activities: [],
		totals: {
			activities: 0,
			distance: 0
		}
	},
	2015: {
		activities: [],
		totals: {
			activities: 0,
			distance: 0
		}
	},
	2016: {
		activities: [],
		totals: {
			activities: 0,
			distance: 0
		}
	},
	2017: {
		activities: [],
		totals: {
			activities: 0,
			distance: 0
		}
	},
	2018: {
		activities: [],
		totals: {
			activities: 0,
			distance: 0
		}
	},
	2019: {
		activities: [],
		totals: {
			activities: 0,
			distance: 0
		}
	},
	2020: {
		activities: [],
		totals: {
			activities: 0,
			distance: 0
		}
	},
	2021: {
		activities: [],
		totals: {
			activities: 0,
			distance: 0
		}
	},
	2022: {
		activities: [],
		totals: {
			activities: 0,
			distance: 0
		}
	},
	2023: {
		activities: [],
		totals: {
			activities: 0,
			distance: 0
		}
	},
	2024: {
		activities: [],
		totals: {
			activities: 0,
			distance: 0
		}
	}
}

export const emptyActivity: Activity = {
	average_cadence: 0,
    average_heartrate: 0,
    average_speed: 0,
    distance: 0,
    id: '',
    moving_time: 0,
    name: '',
    start_date: '',
    suffer_score: ''
}

export const initialData: StateDataAndTotals = {
	apiResponse: {
		...initialCurrentData,
		totals: {
			activities: 0,
			distance: 0
		}
	},
	currentData: initialCurrentData,
	currentTotals: {
		activities: 0,
		distance: 0
	}
}