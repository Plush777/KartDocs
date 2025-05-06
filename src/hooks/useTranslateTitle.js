import { docsSlug } from 'const';

export default function useTranslateTitle(fileName) {
	if (fileName === 'intro') return '소개';

	if (fileName === 'learn') return '배우기';
	if (fileName === 'encyclopedia') return '도감';
	if (fileName === 'faq') return 'FAQ';

	if (fileName === 'startbooster') return '출발 부스터';
	if (fileName === 'grip') return '그립';
	if (fileName === 'drift') return '드리프트';
	if (fileName === 'combobooster') return '순간 부스터';

	if (fileName === 'dao') return '다오';
	if (fileName === 'bazzi') return '배찌';
	if (fileName === 'brodi') return '브로디';
	if (fileName === 'diz') return '디지니';
	if (fileName === 'marid') return '마리드';
	if (fileName === 'kris') return '크리스';
	if (fileName === 'neo') return '네오';
	if (fileName === 'sophia') return '소피아';
	if (fileName === 'mos') return '모스';
	if (fileName === 'uni') return '우니';
	if (fileName === 'airi') return '아이리';
	if (fileName === 'ethen') return '에띠';
	if (fileName === 'rex') return '렉스';
	if (fileName === 'keffy') return '케피';
	if (fileName === 'brian') return '브라이언';
	if (fileName === 'rave') return '레이브';
	if (fileName === 'vivi') return '비비';
	if (fileName === 'pim') return '휘';
	if (fileName === 'tobi') return '토비';
	if (fileName === 'miso') return '미소';
	if (fileName === 'tiera') return '티이라';
	if (fileName === 'lodumani') return '로두마니';
	if (fileName === 'derek') return '데릭';
	if (fileName === 'orion') return '오리온';
	if (fileName === 'mobi') return '모비';
	if (fileName === 'toto') return '투투';
	if (fileName === 'martin') return '마틴';
	if (fileName === 'rena') return '레나';
	if (fileName === 'draki') return '드라키';
	if (fileName === 'spiritkid') return '꼬마유령';
	if (fileName === 'mayorzipi') return '지피시장';
	if (fileName === 'viktor') return '투탑';
	if (fileName === 'raptorL') return '랍토르 L';
	if (fileName === 'raptorR') return '랍토르 R';
	if (fileName === 'taki') return '타키';
	if (fileName === 'erini') return '에리니';
	if (fileName === 'rivaski') return '리바스키';
	if (fileName === 'lucid') return '루시드';
	if (fileName === 'pinkbean') return '핑크빈';
	if (fileName === 'koya') return 'koya';
	if (fileName === 'rj') return 'rj';
	if (fileName === 'shooky') return 'shooky';
	if (fileName === 'mang') return 'mang';
	if (fileName === 'chimmy') return 'chimmy';
	if (fileName === 'tata') return 'tata';
	if (fileName === 'cooky') return 'cooky';
	if (fileName === 'jisu') return '블랙핑크 지수';
	if (fileName === 'jennie') return '블랙핑크 제니';
	if (fileName === 'rose') return '블랙핑크 로제';
	if (fileName === 'lisa') return '블랙핑크 리사';

	if (fileName === 'balloon') return '풍선';

	if (fileName === 'banana') return '바나나';
	if (fileName === 'bigbanana') return '대왕 바나나';
	if (fileName === 'baricade') return '바리케이드';
	if (fileName === 'waterbomb') return '물폭탄';
	if (fileName === 'waterfly') return '물파리';
	if (fileName === 'missile') return '미사일';
	if (fileName === '1stmissile') return '1등 미사일';
	if (fileName === 'thunderbolt') return '벼락';
	if (fileName === 'spaceship') return '우주선';
	if (fileName === 'siren') return '사이렌';
	if (fileName === 'landmine') return '지뢰';

	if (fileName === 'electromagnetic') return '전자파';
	if (fileName === 'shield') return '실드';
	if (fileName === 'angel') return '천사';
	if (fileName === 'scanner') return '스캐너';

	if (fileName === 'booster') return '부스터';
	if (fileName === 'magnet') return '자석';

	if (fileName === 'sirenplus') return '강화 사이렌';
	if (fileName === 'bunchwaterbomb') return '다발 물폭탄';
	if (fileName === 'book') return '책';
	if (fileName === 'bombard') return '폭격 폭탄';

	if (fileName === 'optimize') return '최적화 드리프트';
	if (fileName === 'short') return '숏 드리프트';
	if (fileName === 'full') return '풀 드리프트';
	if (fileName === 'double') return '더블 드리프트';
	if (fileName === 'cutting') return '커팅 드리프트';
	if (fileName === 'twist') return '비틀기 드리프트';
	if (fileName === 'combo') return '연타 드리프트';
	if (fileName === 'long') return '끌기';
	if (fileName === 'spinturn') return '스핀턴';
	if (fileName === 'shortcut') return '숏 커팅';
	if (fileName === 'draft') return '드래프트';
	if (fileName === 'twobooster') return '투 부스터';
	if (fileName === 'combocancel') return '순간 부스터 캔슬';

	if (fileName === 'defence') return '디펜스';
	if (fileName === 'straight') return '직진 부스터';
	if (fileName === 'deliberate') return '고의 삽';

	if (fileName === 'distance') return '거리유지';
	if (fileName === 'runner') return '러너';
	if (fileName === 'middle') return '미들';
	if (fileName === 'sweeper') return '스위퍼';

	if (fileName === 'item') return '아이템전';
	if (fileName === 'speed') return '스피드전';

	if (fileName === 'karts') return '카트바디 도감';
	if (fileName === 'characters') return '캐릭터 도감';

	if (fileName === docsSlug.faq.depth2.goods.mileage.slug) return docsSlug.faq.depth2.goods.mileage.title;
	if (fileName === docsSlug.faq.depth2.goods.how_to_get_a_lot_of_mileage.slug)
		return docsSlug.faq.depth2.goods.how_to_get_a_lot_of_mileage.title;
	if (fileName === docsSlug.faq.depth2.goods.how_to_get_a_lot_of_lucci.slug)
		return docsSlug.faq.depth2.goods.how_to_get_a_lot_of_lucci.title;
	if (fileName === docsSlug.faq.depth2.goods.how_do_i_get_a_plus_box_or_a_premium_plus_box.slug)
		return docsSlug.faq.depth2.goods.how_do_i_get_a_plus_box_or_a_premium_plus_box.title;
	if (fileName === docsSlug.faq.depth2.goods.get_coin_for_free.slug)
		return docsSlug.faq.depth2.goods.get_coin_for_free.title;

	if (fileName === docsSlug.faq.depth2.system.personal_outlet.slug)
		return docsSlug.faq.depth2.system.personal_outlet.title;
	if (fileName === docsSlug.faq.depth2.system.how_do_i_use_the_coupon.slug)
		return docsSlug.faq.depth2.system.how_do_i_use_the_coupon.title;
	if (fileName === docsSlug.faq.depth2.system.config_where_is_it.slug)
		return docsSlug.faq.depth2.system.config_where_is_it.title;
	if (fileName === docsSlug.faq.depth2.system.my_License_is_missing.slug)
		return docsSlug.faq.depth2.system.my_License_is_missing.title;
	if (fileName === docsSlug.faq.depth2.system.is_there_a_separate_AI_matching_standard.slug)
		return docsSlug.faq.depth2.system.is_there_a_separate_AI_matching_standard.title;
	if (fileName === docsSlug.faq.depth2.system.my_replays_wont_save.slug)
		return docsSlug.faq.depth2.system.my_replays_wont_save.title;
	if (fileName === docsSlug.faq.depth2.system.drift_Assist_is_missing.slug)
		return docsSlug.faq.depth2.system.drift_Assist_is_missing.title;
	if (fileName === docsSlug.faq.depth2.system.when_does_the_weekly_limit_for_Lucci_reset.slug)
		return docsSlug.faq.depth2.system.when_does_the_weekly_limit_for_Lucci_reset.title;
	if (fileName === docsSlug.faq.depth2.system.what_is_the_block_feature.slug)
		return docsSlug.faq.depth2.system.what_is_the_block_feature.title;
	if (fileName === docsSlug.faq.depth2.system.i_met_a_malicious_racer.slug)
		return docsSlug.faq.depth2.system.i_met_a_malicious_racer.title;
	if (fileName === docsSlug.faq.depth2.system.what_is_your_proficiency.slug)
		return docsSlug.faq.depth2.system.what_is_your_proficiency.title;

	if (fileName === docsSlug.faq.depth2.play.cant_you_play_common_games_other_than_grade_games.slug)
		return docsSlug.faq.depth2.play.cant_you_play_common_games_other_than_grade_games.title;

	if (fileName === docsSlug.faq.depth2.karts.whats_your_number_one_kartbody_right_now.slug)
		return docsSlug.faq.depth2.karts.whats_your_number_one_kartbody_right_now.title;

	if (fileName === docsSlug.faq.depth2.tuning.how_do_i_upgrade_my_kartbody.slug)
		return docsSlug.faq.depth2.tuning.how_do_i_upgrade_my_kartbody.title;
	if (fileName === docsSlug.faq.depth2.tuning.what_is_the_best_way_to_set_up_a_tuning_stat.slug)
		return docsSlug.faq.depth2.tuning.what_is_the_best_way_to_set_up_a_tuning_stat.title;
	if (fileName === docsSlug.faq.depth2.tuning.is_the_legend_rank_removed_from_tuning.slug)
		return docsSlug.faq.depth2.tuning.is_the_legend_rank_removed_from_tuning.title;

	if (fileName === docsSlug.faq.depth2.setting.wasd_or_arrow_keys.slug)
		return docsSlug.faq.depth2.setting.wasd_or_arrow_keys.title;
	if (fileName === docsSlug.faq.depth2.setting.settings_for_not_getting_lag.slug)
		return docsSlug.faq.depth2.setting.settings_for_not_getting_lag.title;

	if (fileName === docsSlug.faq.depth2.speed.what_character_should_i_use_in_speed_mode.slug)
		return docsSlug.faq.depth2.speed.what_character_should_i_use_in_speed_mode.title;
	if (fileName === docsSlug.faq.depth2.speed.what_is_the_best_map_for_beginners_to_practice_on.slug)
		return docsSlug.faq.depth2.speed.what_is_the_best_map_for_beginners_to_practice_on.title;
	if (fileName === docsSlug.faq.depth2.speed.booster_gauge_automatically_fills_up.slug)
		return docsSlug.faq.depth2.speed.booster_gauge_automatically_fills_up.title;

	if (fileName === docsSlug.faq.depth2.item.what_kartbody_should_i_use_in_item_mode.slug)
		return docsSlug.faq.depth2.item.what_kartbody_should_i_use_in_item_mode.title;
	if (fileName === docsSlug.faq.depth2.item.what_character_should_i_use_in_item_mode.slug)
		return docsSlug.faq.depth2.item.what_character_should_i_use_in_item_mode.title;
	if (fileName === docsSlug.faq.depth2.item.electromagnetic_bands_or_pets.slug)
		return docsSlug.faq.depth2.item.electromagnetic_bands_or_pets.title;

	if (fileName === docsSlug.faq.depth2.etc.there_is_frequent_game_crashing.slug)
		return docsSlug.faq.depth2.etc.there_is_frequent_game_crashing.title;
	if (fileName === docsSlug.faq.depth2.etc.what_do_you_mean_by_10_point_and_12_point.slug)
		return docsSlug.faq.depth2.etc.what_do_you_mean_by_10_point_and_12_point.title;
	if (fileName === docsSlug.faq.depth2.etc.no_kdl.slug) return docsSlug.faq.depth2.etc.no_kdl.title;
	if (fileName === docsSlug.faq.depth2.etc.is_there_a_guild_system_or_something.slug)
		return docsSlug.faq.depth2.etc.is_there_a_guild_system_or_something.title;
	if (fileName === docsSlug.faq.depth2.etc.get_a_good_kartbody.slug)
		return docsSlug.faq.depth2.etc.get_a_good_kartbody.title;
	if (fileName === docsSlug.faq.depth2.etc.where_can_i_get_the_items_i_didnt_get_back.slug)
		return docsSlug.faq.depth2.etc.where_can_i_get_the_items_i_didnt_get_back.title;

	if (fileName === 'purpose') return '사이트 안내';
	if (fileName === 'contribute') return '기여하기';

	return undefined;
}
