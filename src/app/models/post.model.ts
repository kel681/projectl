import { SuggestionModel } from './suggestion.model';
export class PostModel {
    id!: string;
    title!: string;
    content!: string;
    suggestions?: SuggestionModel[];
}