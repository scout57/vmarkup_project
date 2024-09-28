import {Column, Entity} from 'typeorm';
import {BaseModel} from "framework";


@Entity('video_scenes_faces')
export class VideoSceneFace extends BaseModel {
    @Column('int')
    scene_id!: number;

    @Column('varchar')
    emotion_label!: string;

    @Column('float')
    emotion_probability!: number;
}
