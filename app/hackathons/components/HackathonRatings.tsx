import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Utensils, Gift, Bed, Users } from "lucide-react";
import { HackathonMetadata } from "../utils";

export function HackathonRatings({ metadata }: { metadata: HackathonMetadata }) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${
          i < rating
            ? "fill-white text-white dark:fill-gray-100 dark:text-gray-100"
            : "fill-gray-300 text-gray-300 dark:fill-gray-600 dark:text-gray-600"
        }`}
      />
    ));
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4) return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    if (rating >= 3) return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    if (rating >= 2) return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
    return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
  };

  const ratingCategories = [
    {
      key: "food",
      label: "Food",
      icon: Utensils,
      rating: metadata.ratings.food,
    },
    {
      key: "swag",
      label: "Swag",
      icon: Gift,
      rating: metadata.ratings.swag,
    },
    {
      key: "stay",
      label: "Stay",
      icon: Bed,
      rating: metadata.ratings.stay,
    },
    {
      key: "mentorship",
      label: "Mentorship",
      icon: Users,
      rating: metadata.ratings.mentorship,
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Star className="h-4 w-4 text-muted-foreground" />
          Experience Ratings
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {ratingCategories.map((category) => (
            <div key={category.key} className="flex items-center justify-between p-2 border rounded-md">
              <div className="flex items-center gap-2">
                <category.icon className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">{category.label}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex gap-0.5">
                  {renderStars(category.rating)}
                </div>
                <Badge variant="secondary" className={`text-xs ${getRatingColor(category.rating)}`}>
                  {category.rating}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
