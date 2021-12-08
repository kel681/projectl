import { SuggestionModel } from './suggestion.model';
export class PostModel {
    postId?: string;
    title?: string;
    content?: string;
    suggestions?: SuggestionModel[];
}