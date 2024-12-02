interface GetLimitedValueParams {
	value: number;
	min: number;
	max: number;
}

export const getLimitedValue = (params: GetLimitedValueParams): number  => {
	const {
		max,
		min,
		value
	} = params

	if(value > max) return max
	if(value < min) return min

	return value
}