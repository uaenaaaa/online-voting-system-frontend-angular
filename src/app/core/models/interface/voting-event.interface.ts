export interface VotingEvent {
	approved: boolean;
	created_at: string;
	created_by: number;
	full_name: string;
	creator_username: string;
	description: string;
	end_date: string;
	event_id: number;
	event_type: string;
	is_deleted: boolean;
	last_modified_at: string;
	start_date: string;
	status: string;
	title: string;
	uuid: string;
	creator_id: number;
	creator_uuid: string;
}