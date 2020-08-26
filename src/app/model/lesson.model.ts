import { UpdatedBy } from './updated-by.model';
import { CreatedBy } from './created-by.model';
import { CardImage } from './card-image.model';
import { Thumbnail } from './thumbnail.model';
import { Topics } from './topics.model';

export class Lesson {
	'id': string;
	'title': string;
	'thumbnail': Thumbnail;
	'cardImage': CardImage;
	'duration': number;
	'responsive': boolean;
	'languages': any = {};
	'description': string;
	'topics': Topics;
	'author': string;
	'technicalDetails': string;
	'grade': number;
	'rating': number;
	'hardwareCompatibility': any = {};
	'centralQuestion': string;
	'instructionalObjective': string;
	'learningOutcomes': string;
	'prerequisites': string;
	'methods': any = {};
	'created_by': CreatedBy;
	'updated_by': UpdatedBy;
}
