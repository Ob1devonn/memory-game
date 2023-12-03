import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    //verify this is the same aspect as GameCard
    <Card>
      <Skeleton h="20rem" />
      <CardBody>
        <SkeletonText noOfLines={1} spacing="4" skeletonHeight="1.2rem" />
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton;
