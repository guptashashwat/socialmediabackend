"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const writePostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "Users",
    },
    description: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    time: {
        type: Date,
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: "Users",
            },
        },
    ],
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: "Users",
            },
            text: {
                type: String,
                required: true,
            },
            name: {
                type: String,
            },
            time: {
                type: Date,
            },
        },
    ],
});
var writePost = mongoose.model("writePost", writePostSchema);
module.exports = writePost;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3JpdGVQb3N0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy93cml0ZVBvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNyQyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO0FBRS9CLE1BQU0sZUFBZSxHQUFHLElBQUksTUFBTSxDQUFDO0lBQy9CLElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7UUFDM0IsR0FBRyxFQUFFLE9BQU87S0FDZjtJQUNELFdBQVcsRUFBRTtRQUNULElBQUksRUFBRSxNQUFNO0tBQ2Y7SUFDRCxLQUFLLEVBQUU7UUFDSCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsR0FBRyxFQUNIO1FBQ0ksSUFBSSxFQUFFLE1BQU07S0FDZjtJQUNELElBQUksRUFBQztRQUNELElBQUksRUFBRSxJQUFJO0tBQ2I7SUFDRCxLQUFLLEVBQUU7UUFDSDtZQUNFLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRO2dCQUMzQixHQUFHLEVBQUUsT0FBTzthQUNiO1NBQ0Y7S0FDRjtJQUNELFFBQVEsRUFBRTtRQUNSO1lBQ0UsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7Z0JBQzNCLEdBQUcsRUFBRSxPQUFPO2FBQ2I7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLElBQUk7YUFDZjtZQUNELElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsTUFBTTthQUNiO1lBQ0QsSUFBSSxFQUFDO2dCQUNILElBQUksRUFBRSxJQUFJO2FBQ1g7U0FDRjtLQUNGO0NBQ04sQ0FBQyxDQUFDO0FBR0gsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDN0QsTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcclxuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hO1xyXG5cclxuY29uc3Qgd3JpdGVQb3N0U2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgICB1c2VyOiB7XHJcbiAgICAgICAgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxyXG4gICAgICAgIHJlZjogXCJVc2Vyc1wiLFxyXG4gICAgfSxcclxuICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGltZzogXHJcbiAgICB7IFxyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgICB0aW1lOntcclxuICAgICAgICB0eXBlOiBEYXRlLFxyXG4gICAgfSxcclxuICAgIGxpa2VzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsXHJcbiAgICAgICAgICAgIHJlZjogXCJVc2Vyc1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBjb21tZW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxyXG4gICAgICAgICAgICByZWY6IFwiVXNlcnNcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0ZXh0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbmFtZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGltZTp7XHJcbiAgICAgICAgICAgIHR5cGU6IERhdGUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbn0pO1xyXG5cclxuLy9AdHMtaWdub3JlXHJcbnZhciB3cml0ZVBvc3QgPSBtb25nb29zZS5tb2RlbChcIndyaXRlUG9zdFwiLCB3cml0ZVBvc3RTY2hlbWEpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHdyaXRlUG9zdDsiXX0=