export type EngineerProfile = {
	basic: {
		name: string;
		slug: string;
		role: string;
		top_skills: string[];
	};
	profile: {
		introduction: string;
	};
	skills: {
		spoken_languages: string[];
		programming_languages: string[];
		frameworks: string[];
		databases: string[];
		cloud_platforms: string[];
		tools: string[];
	};
	work_history: {
		name: string;
		role: string;
		team_size: number;
		description: string;
		start_date: string;
		end_date: string;
		technologies: string[];
	}[];
};

export type SkillCategory =
	| 'programming_languages'
	| 'spoken_languages'
	| 'frameworks'
	| 'databases'
	| 'cloud_platforms'
	| 'tools'
	| 'roles'
	| 'technologies';

export type SearchTag = {
	value: string;
	category: SkillCategory;
};

export type SkillSuggestion = {
	value: string;
	category: SkillCategory;
	label: string;
};
