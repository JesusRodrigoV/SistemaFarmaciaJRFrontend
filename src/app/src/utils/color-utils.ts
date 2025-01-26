export function generateColors(numberOfColors: number): {
	solidColors: string[];
	opaqueColors: string[];
} {
	const solidColors: string[] = [];
	const opaqueColors: string[] = [];

	// Generate colors
	while (solidColors.length < numberOfColors) {
		const r = Math.floor(Math.random() * 256);
		const g = Math.floor(Math.random() * 256);
		const b = Math.floor(Math.random() * 256);
		const solidColor = `rgb(${r}, ${g}, ${b})`;
		const opaqueColor = `rgba(${r}, ${g}, ${b}, 0.3)`;

		if (!isSimilarToLastThree(solidColors, solidColor)) {
			solidColors.push(solidColor);
			opaqueColors.push(opaqueColor);
		}
	}

	return { solidColors, opaqueColors };
}

function isSimilarToLastThree(colors: string[], newColor: string): boolean {
	if (colors.length < 3) return false;
	const diffs = colors
		.slice(-3)
		.map((color) => colorDifference(color, newColor));
	return diffs.some((diff) => diff < 30);
}

function colorDifference(color1: string, color2: string): number {
	const [r1, g1, b1] = color1.match(/\d+/g)!.map(Number);
	const [r2, g2, b2] = color2.match(/\d+/g)!.map(Number);
	return Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);
}
