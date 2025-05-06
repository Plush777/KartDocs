import { docsSlug } from 'const';

export const changeLinkName = item => {
	// console.log(item);

	if (item === 'intro') return '소개';

	/* footer */
	if (item === 'purpose') return '사이트 안내';
	if (item === 'contribute') return '기여하기';

	/* 1차 카테고리 */
	if (item === 'learn') return '배우기';
	if (item === 'encyclopedia') return '도감';
	if (item === 'faq') return 'faq';

	/* 2차 카테고리 */
	if (item === 'basic') return '기초';
	if (item === 'speed') return '스피드전';
	if (item === 'item') return '아이템전';
	if (item === 'tuning') return '튜닝';
	if (item === 'karts') return '카트바디 도감';
	if (item === 'characters') return '캐릭터 도감';

	/* faq */
	/* --- 스피드전, 아이템전, 튜닝은 중복이라 위에꺼 그대로 사용 --- */
	if (item === 'goods') return docsSlug.faq.pageName.goods;
	if (item === 'system') return docsSlug.faq.pageName.system;
	if (item === 'play') return docsSlug.faq.pageName.play;
	if (item === 'karts' && item === 'faq') return docsSlug.faq.pageName.karts;
	if (item === 'setting') return docsSlug.faq.pageName.setting;
	if (item === 'etc') return docsSlug.faq.pageName.etc;

	/* faq goods */
	if (item === 'mileage') return docsSlug.faq.depth2.goods.mileage.title;
	if (item === 'how_to_get_a_lot_of_mileage') return docsSlug.faq.depth2.goods.how_to_get_a_lot_of_mileage.title;
	if (item === 'how_to_get_a_lot_of_lucci') return docsSlug.faq.depth2.goods.how_to_get_a_lot_of_lucci.title;
	if (item === 'how_do_i_get_a_plus_box_or_a_premium_plus_box')
		return docsSlug.faq.depth2.goods.how_do_i_get_a_plus_box_or_a_premium_plus_box.title;
	if (item === 'get_coin_for_free') return docsSlug.faq.depth2.goods.get_coin_for_free.title;

	/* faq system */
	if (item === 'personal_outlet') return docsSlug.faq.depth2.system.personal_outlet.title;
	if (item === 'how_do_i_use_the_coupon') return docsSlug.faq.depth2.system.how_do_i_use_the_coupon.title;
	if (item === 'config_where_is_it') return docsSlug.faq.depth2.system.config_where_is_it.title;
	if (item === 'my_License_is_missing') return docsSlug.faq.depth2.system.my_License_is_missing.title;
	if (item === 'is_there_a_separate_AI_matching_standard')
		return docsSlug.faq.depth2.system.is_there_a_separate_AI_matching_standard.title;
	if (item === 'my_replays_wont_save') return docsSlug.faq.depth2.system.my_replays_wont_save.title;
	if (item === 'not_able_to_use_chat') return docsSlug.faq.depth2.system.not_able_to_use_chat.title;
	if (item === 'drift_Assist_is_missing') return docsSlug.faq.depth2.system.drift_Assist_is_missing.title;
	if (item === 'when_does_the_weekly_limit_for_Lucci_reset')
		return docsSlug.faq.depth2.system.when_does_the_weekly_limit_for_Lucci_reset.title;
	if (item === 'what_is_the_block_feature') return docsSlug.faq.depth2.system.what_is_the_block_feature.title;
	if (item === 'i_met_a_malicious_racer') return docsSlug.faq.depth2.system.i_met_a_malicious_racer.title;
	if (item === 'what_is_your_proficiency') return docsSlug.faq.depth2.system.what_is_your_proficiency.title;

	/* faq play */
	if (item === 'cant_you_play_common_games_other_than_grade_games')
		return docsSlug.faq.depth2.play.cant_you_play_common_games_other_than_grade_games.title;

	/* faq karts */
	if (item === 'whats_your_number_one_kartbody_right_now')
		return docsSlug.faq.depth2.karts.whats_your_number_one_kartbody_right_now.title;

	/* faq tuning */
	if (item === 'how_do_i_upgrade_my_kartbody') return docsSlug.faq.depth2.tuning.how_do_i_upgrade_my_kartbody.title;
	if (item === 'what_is_the_best_way_to_set_up_a_tuning_stat')
		return docsSlug.faq.depth2.tuning.what_is_the_best_way_to_set_up_a_tuning_stat.title;
	if (item === 'is_the_legend_rank_removed_from_tuning')
		return docsSlug.faq.depth2.tuning.is_the_legend_rank_removed_from_tuning.title;

	/* faq setting */
	if (item === 'wasd_or_arrow_keys') return docsSlug.faq.depth2.setting.wasd_or_arrow_keys.title;
	if (item === 'settings_for_not_getting_lag') return docsSlug.faq.depth2.setting.settings_for_not_getting_lag.title;

	/* faq speed */
	if (item === 'what_character_should_i_use_in_speed_mode')
		return docsSlug.faq.depth2.speed.what_character_should_i_use_in_speed_mode.title;
	if (item === 'what_is_the_best_map_for_beginners_to_practice_on')
		return docsSlug.faq.depth2.speed.what_is_the_best_map_for_beginners_to_practice_on.title;
	if (item === 'booster_gauge_automatically_fills_up')
		return docsSlug.faq.depth2.speed.booster_gauge_automatically_fills_up.title;

	/* faq item */
	if (item === 'what_kartbody_should_i_use_in_item_mode')
		return docsSlug.faq.depth2.item.what_kartbody_should_i_use_in_item_mode.title;
	if (item === 'what_character_should_i_use_in_item_mode')
		return docsSlug.faq.depth2.item.what_character_should_i_use_in_item_mode.title;
	if (item === 'electromagnetic_bands_or_pets') return docsSlug.faq.depth2.item.electromagnetic_bands_or_pets.title;

	/* faq etc */
	if (item === 'there_is_frequent_game_crashing') return docsSlug.faq.depth2.etc.there_is_frequent_game_crashing.title;
	if (item === 'what_do_you_mean_by_10_point_and_12_point')
		return docsSlug.faq.depth2.etc.what_do_you_mean_by_10_point_and_12_point.title;
	if (item === 'no_kdl') return docsSlug.faq.depth2.etc.no_kdl.title;
	if (item === 'is_there_a_guild_system_or_something')
		return docsSlug.faq.depth2.etc.is_there_a_guild_system_or_something.title;
	if (item === 'get_a_good_kartbody') return docsSlug.faq.depth2.etc.get_a_good_kartbody.title;
	if (item === 'where_can_i_get_the_items_i_didnt_get_back')
		return docsSlug.faq.depth2.etc.where_can_i_get_the_items_i_didnt_get_back.title;

	/* 기초 */
	if (item === 'startbooster') return '출발 부스터';
	if (item === 'grip') return '그립';
	if (item === 'drift') return '드리프트';
	if (item === 'combobooster') return '순간 부스터';

	/* 캐릭터 */
	if (item === 'character') return '캐릭터';
	if (item === 'dao') return '다오';
	if (item === 'bazzi') return '배찌';
	if (item === 'brodi') return '브로디';
	if (item === 'diz') return '디지니';
	if (item === 'marid') return '마리드';
	if (item === 'kris') return '크리스';
	if (item === 'neo') return '네오';
	if (item === 'sophia') return '소피아';
	if (item === 'mos') return '모스';
	if (item === 'uni') return '우니';
	if (item === 'airi') return '아이리';
	if (item === 'ethen') return '에띠';
	if (item === 'rex') return '렉스';
	if (item === 'keffy') return '케피';
	if (item === 'brian') return '브라이언';
	if (item === 'rave') return '레이브';
	if (item === 'vivi') return '비비';
	if (item === 'pim') return '휘';
	if (item === 'tobi') return '토비';
	if (item === 'miso') return '미소';
	if (item === 'tiera') return '티이라';
	if (item === 'lodumani') return '로두마니';
	if (item === 'derek') return '데릭';
	if (item === 'orion') return '오리온';
	if (item === 'mobi') return '모비';
	if (item === 'toto') return '투투';
	if (item === 'martin') return '마틴';
	if (item === 'rena') return '레나';
	if (item === 'draki') return '드라키';
	if (item === 'spiritkid') return '꼬마유령';
	if (item === 'mayorzipi') return '지피시장';
	if (item === 'viktor') return '투탑';
	if (item === 'raptorL') return '랍토르 L';
	if (item === 'raptorR') return '랍토르 R';
	if (item === 'taki') return '타키';
	if (item === 'erini') return '에리니';
	if (item === 'rivaski') return '리바스키';
	if (item === 'lucid') return '루시드';
	if (item === 'pinkbean') return '핑크빈';
	if (item === 'koya') return 'koya';
	if (item === 'rj') return 'rj';
	if (item === 'shooky') return 'shooky';
	if (item === 'mang') return 'mang';
	if (item === 'chimmy') return 'chimmy';
	if (item === 'tata') return 'tata';
	if (item === 'cooky') return 'cooky';
	if (item === 'jisu') return '블랙핑크 지수';
	if (item === 'jennie') return '블랙핑크 제니';
	if (item === 'rose') return '블랙핑크 로제';
	if (item === 'lisa') return '블랙핑크 리사';

	/* 착용 아이템 */
	if (item === 'wear') return '착용 아이템';
	if (item === 'balloon') return '풍선';

	/* 공격 아이템 */
	if (item === 'attack') return '공격 아이템';
	if (item === 'banana') return '바나나';
	if (item === 'bigbanana') return '대왕 바나나';
	if (item === 'baricade') return '바리케이드';
	if (item === 'waterbomb') return '물폭탄';
	if (item === 'waterfly') return '물파리';
	if (item === 'missile') return '미사일';
	if (item === '1stmissile') return '1등 미사일';
	if (item === 'thunderbolt') return '벼락';
	if (item === 'spaceship') return '우주선';
	if (item === 'siren') return '사이렌';
	if (item === 'landmine') return '지뢰';

	/* 방어 아이템 */
	if (item === 'struggle' && item === 'defence') return '디펜스';
	if (item === 'item' && item === 'defence') return '방어 아이템';
	if (item === 'electromagnetic') return '전자파';
	if (item === 'shield') return '실드';
	if (item === 'angel') return '천사';
	if (item === 'scanner') return '스캐너';

	/* 가속 아이템 */
	if (item === 'acceleration') return '가속 아이템';
	if (item === 'booster') return '부스터';
	if (item === 'magnet') return '자석';

	/* 특수 아이템 */
	if (item === 'special') return '특수 아이템';
	if (item === 'sirenplus') return '강화 사이렌';
	if (item === 'bunchwaterbomb') return '다발 물폭탄';
	if (item === 'book') return '책';
	if (item === 'bombard') return '폭격 폭탄';

	/* 주행기술 */
	if (item === 'tech') return '주행기술';
	if (item === 'optimize') return '최적화 드리프트';
	if (item === 'short') return '숏 드리프트';
	if (item === 'full') return '풀 드리프트';
	if (item === 'double') return '더블 드리프트';
	if (item === 'cutting') return '커팅 드리프트';
	if (item === 'twist') return '비틀기 드리프트';
	if (item === 'combo') return '연타 드리프트';
	if (item === 'long') return '끌기';
	if (item === 'spinturn') return '스핀턴';
	if (item === 'shortcut') return '숏 커팅';
	if (item === 'draft') return '드래프트';
	if (item === 'twobooster') return '투 부스터';
	if (item === 'combocancel') return '순간 부스터 캔슬';

	/* 몸싸움 전략 */
	if (item === 'struggle') return '몸싸움 전략';
	if (item === 'defence') return '디펜스';
	if (item === 'straight') return '직진 부스터 (직부)';
	if (item === 'deliberate') return '고의 삽';

	/* 팀전 전략 */
	if (item === 'team') return '팀전 전략';
	if (item === 'distance') return '거리유지';
	if (item === 'runner') return '러너';
	if (item === 'middle') return '미들';
	if (item === 'sweeper') return '스위퍼';

	/* 튜닝 */
	/* --- 튜닝은 중복이라 위에꺼 그대로 사용 --- */

	return 'undefined';
};
