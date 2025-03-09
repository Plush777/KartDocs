import * as M from 'style/components/main/Main.style';
import MainTitle from 'components/title/MainTitle';
import SeasonList from 'components/season/SeasonList';
import calcSeason from 'scripts/calcSeason';
import SeasonCalculator from 'components/season/SeasonCalculator';

export default function SeasonLayout() {
	const { currentSeasonNumber, next, error, proceed } = calcSeason();

	const surffix = () => {
		if (currentSeasonNumber === 1) return 'st';
		if (currentSeasonNumber === 2) return 'nd';
		if (currentSeasonNumber === 3) return 'rd';

		return 'th';
	};

	const renderSeasonList = () => {
		if (!next && !error && proceed == true) return <SeasonList />;
		if (!proceed && !error && next == true) return <SeasonList state="seasonReady" />;
		if (!proceed && !next && error == true) return <SeasonList state="error" />;
	};

	return (
		<M.ContainerBox justify="between">
			<MainTitle title={`${currentSeasonNumber}${surffix()} 등급전 ${next == true ? '준비중...' : '진행중!'}`} />

			<M.MainInner name="season">{renderSeasonList()}</M.MainInner>

			<SeasonCalculator />
		</M.ContainerBox>
	);
}
